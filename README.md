# **Plant desease detection**
this project is to create a plant's common desease classifier web aap.

### **Code and resources used**

**Language**-python 3.9

**dataset**-[plant desease dataset kaggle](https://www.kaggle.com/datasets/vipoooool/new-plant-diseases-dataset)

**Pakages Used**- numpy, tensorflow, pickle, keras, cv2 ,flask

**model Used**- Alexnet(CNN based architecture)

### **procedural steps**

**step1 (data extraction)**-first of all download the dataset from given link in code and resources section.                                                                                 Read the image data from the help of keras Imagedatagenerator. but before that make sure that the path you are giving is right and the passed path storing the image files.

example-\
data\
├── test\
│   ├── blue\
│   │   └── blue_car_01.jpg\
│   └── red\
│       └── red_car_01.jpg\
├── train\
│   ├── blue\
│   │   └── blue_car_01.jpg\
│   └── red\
│       └── red_car_01.jpg\
└── validation\
    ├── blue\
    │   └── blue_car_01.jpg\
    └── red\
        └── red_car_01.jpg\
                         
**step2 (create and train)**- in this particular model i have trained it only on 1 epoch beacuse of gpu and problem of longa data updation problem on colab.but according to the data lenght this will be a pretty good model after approximately 30 epochs.\
[epochs,loss](https://www.researchgate.net/publication/354157690/figure/fig3/AS:1061264558141440@1630036596031/aTraining-and-Validation-Loss-Curves-for-30-epochs-b-Training-and-Validation.ppm)

**step3 (save model)**-save the model using pickle module.

```
import pickle
pickle.dump(model,open('plant_model.pkl','wb'))
```

**step5 (create user interface for input)**-create a form type interface using html and css to take the input image file from the user.

**step6 (deploy with flask)**-connect the model to make predictions on user input data using the model.for the we need to connect our model using the flask framework.which in contained by the 'app.py'file in repositary.

