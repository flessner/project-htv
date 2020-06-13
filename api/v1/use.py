import tensorflow as tf

import keras
import image
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

from tqdm import tqdm
from PIL import Image, ImageOps
from keras.models import Sequential
from keras.layers import Dense, Dropout, Flatten
from keras.layers import Conv2D, MaxPooling2D
from keras.utils import to_categorical
from keras.preprocessing import image
from sklearn.model_selection import train_test_split

def formattingPicInTemp():
    im = Image.open('./tmp/pre.jpg')
    old_size = im.size
    ratio = float(desired_size)/max(old_size)
    new_size = tuple([int(x*ratio) for x in old_size])

    im = im.resize(new_size, Image.ANTIALIAS)
    new_im = Image.new("RGB", (desired_size, desired_size))
    new_im.paste(im, ((desired_size-new_size[0])//2, (desired_size-new_size[1])//2))

    new_im.save('./tmp/formatted.jpg')

def getPrediction():
    img = image.load_img('./test/formatted.jpg',target_size=(400,400,3))
    img = image.img_to_array(img)
    img = img/255

    loaded_model = tf.keras.models.load_model('./model')

    classes = np.array(train.columns[2:])
    probe = loaded_model.predict(img.reshape(1,400,400,3))
    print(probe)