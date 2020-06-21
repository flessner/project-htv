import tensorflow as tf
from tensorflow import keras

import glob
import numpy as np
import pandas as pd

from PIL import Image, ImageOps

# List current models & search for newest
models = glob.glob("./save/*.tf")
latest_model = 0
for i in models:
    i = int(i[i.rfind('-') + 1:])
    if i > latest_model:
        latest_model = i
        print(i)

# Base values
tags = ['sk-eisen-nickel', 'nachverzinnt', 'sk-kupfer']
train = pd.read_csv('./data.csv')
print("Num GPUs Available: ", len(tf.config.experimental.list_physical_devices('GPU')))
desired_size = 400
image_path = './tmp/test.jpg'

# Open & resize image
im = Image.open(image_path)
old_size = im.size
ratio = float(desired_size)/max(old_size)
new_size = tuple([int(x*ratio) for x in old_size])
im = im.resize(new_size, Image.ANTIALIAS)

new_im = Image.new("RGB", (desired_size, desired_size))
new_im.paste(im, ((desired_size-new_size[0])//2, (desired_size-new_size[1])//2))
new_im.save('./tmp/formatted.jpg')

# Loading image from tmp
img = keras.preprocessing.image.load_img('./tmp/formatted.jpg',target_size=(400,400,3))
img = keras.preprocessing.image.img_to_array(img)
img = img/255

# Making prediction from model
loaded_model = keras.models.load_model('./save/model-' + str(latest_model))
classes = np.array(train.columns[2:])
probe = loaded_model.predict(img.reshape(1,400,400,3))

for i in range(len(probe[0])):
    print(str(tags[i]) + ': ' + str(float(probe[0][i])))
