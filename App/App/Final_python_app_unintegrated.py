import sys

import requests

import json

from tkinter import *

from tkinter.messagebox import showinfo, showerror


####################################################################################################################

####################################################################################################################

####################################################################################################################

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

    return dic.get('return')


####################################################################################################################

####################################################################################################################

####################################################################################################################

####################################################################################################################


def btn_click():

    num = textNumber.get()

    msg = textMsg.get("1.0", END)

    r = send_sms(num, msg)

    if r:
        showinfo("Send Success", "Successfully sent")
    else:
        showerror("Error", "Something went wrong..")

####################################################################################################################

####################################################################################################################

####################################################################################################################


# Creating GUI

root = Tk()

root.title("Message Sender By Team 450 Found")

root.geometry("400x550")



root.configure(background='#00A7B1')

font = ("Helvetica", 22, "bold")

textNumber = Entry(root, font=font)

textNumber.pack(fill=X , pady=20)

textMsg = Text(root)

textMsg.pack(fill=X)

sendBtn = Button(root, text="SEND SMS",bg="white",font = "Times",command=btn_click)

sendBtn.pack()

root.mainloop()

####################################################################################################################

####################################################################################################################

####################################################################################################################
