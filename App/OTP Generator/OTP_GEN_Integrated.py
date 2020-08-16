####################################################################################################################

####################################################################################################################

import requests

import json

import random

from tkinter import *

from tkinter.messagebox import showinfo, showerror



p=0

def otp( number ):

 p= random.randint(1000000, 9999999)

 return p

####################################################################################################################

####################################################################################################################

#Function to connect app to API


def send_sms(number, message):

    url = 'https://www.fast2sms.com/dev/bulk'

    params = {

        'authorization': 'Pa6XtQbH2gCg4KAMhI71ZwaC6DCxwanafROlY028kA1f0L6gY3WrSc0HOuoL',

        'sender_id': 'FSTSMS',

        'message': message,

        'language': 'english',

        'route': 'p',

        'numbers': number


    }
    response = requests.get(url, params=params)


    dic = response.json()


    print(dic)

####################################################################################################################
####################################################################################################################

k = otp(p)

print (k)




