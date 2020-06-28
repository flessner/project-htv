import tensorflow as tf
import tensorflowjs as tfjs
import keras

import os, glob, shutil

import image
import time
import numpy as np
import pandas as pd

from tqdm import tqdm
from keras.models import Sequential
from keras.layers import Dense, Dropout, Flatten
from keras.layers import Conv2D, MaxPooling2D
from keras.utils import to_categorical
from keras.preprocessing import image
from sklearn.model_selection import train_test_split

# TF INFO
tf.get_logger().setLevel('INFO')
print("Num GPUs:" + str(len(tf.config.list_physical_devices('GPU'))))

# DATA VARIABLES
data_loc = 'D:/Media/htv-sorted/resized/'
train = pd.read_csv('./data.csv')

try:
    print('Removing old contents')
    shutil.rmtree('./save')
except:
    print("Couldn't delete ./save directroy!")

train_image = []
for i in tqdm(range(train.shape[0])):
    img = image.load_img(data_loc + '(' + str(int(train['Id'][i])) + ').jpg', target_size=(400,400,3))
    img = img.convert('RGB')
    img = image.img_to_array(img)
    img = img/255
    train_image.append(img)
X = np.array(train_image)
y = np.array(train.drop(['Id'],axis=1))

X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=42, test_size=0.1)

model = Sequential()
model.add(Conv2D(filters=16, kernel_size=(5, 5), activation="relu", input_shape=(400,400,3)))
model.add(MaxPooling2D(pool_size=(2, 2)))
model.add(Dropout(0.35))
model.add(Conv2D(filters=18, kernel_size=(5, 5), activation='relu'))
model.add(MaxPooling2D(pool_size=(2, 2)))
model.add(Dropout(0.35))
model.add(Flatten())
model.add(Dense(128, activation='relu'))
model.add(Dropout(0.3))
model.add(Dense(64, activation='relu'))
model.add(Dropout(0.25))
model.add(Dense(32, activation='relu'))
model.add(Dropout(0.2))
model.add(Dense(3, activation='sigmoid'))

model.compile(optimizer='Adam', loss='binary_crossentropy', metrics=['accuracy'])
model.fit(X_train, y_train, epochs=32, validation_data=(X_test, y_test), batch_size=64)

print('Saving model')
model_save_dir = './save/k1006'

tfjs.converters.save_keras_model(model, model_save_dir)
