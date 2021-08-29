# -*- coding: utf-8 -*-
"""
Created on Sat Aug 28 22:25:34 2021

@author: linoc
"""
import requests
import json

from time import sleep
from pySerialTransfer import pySerialTransfer as txfer

url = "https://adelantec-api.herokuapp.com/api/people"

if __name__ == '__main__':
    try:
        link = txfer.SerialTransfer('COM3')
        
        link.open()
        sleep(2) # allow some time for the Arduino to completely reset
    
        while True:
            
            while not link.available():
       #         print("meow")
                if link.status < 0:
                    print('ERROR: {}'.format(link.status))
                
            print('Response received:')
            
            response = ''
            for index in range(link.bytesRead):
                response += chr(link.rxBuff[index])
            
            saliendo = False
            print(response)
            # checar si ya esta en la lista
            try:
                x = requests.get("https://adelantec-api.herokuapp.com/api/people/area/612b123224592255c7421043")
                res = x.json()
                print("Get response:" + str(res))
                
                if res:
                    _id = res[0]["_id"]
                    rcids = []
                    for r in res:
                        rcids.append(r["rcid"])                    
                    
                    if response in rcids:
                        saliendo = True
                        
            except Exception as e:
                print("Error en get")
            
            if not saliendo:
                newHeaders = {'Content-type': 'application/json', 'Accept': 'text/plain'}     
                myobj = {"rcid": response,"date":"","area":"612b123224592255c7421043"}
                jsonstr1 = json.dumps(myobj)
                
                x = requests.post(url, data = jsonstr1, headers=newHeaders)
                print("Entrando response:" + str(x))
            else:
                # delete from db ese documento
                url2 = "https://adelantec-api.herokuapp.com/api/people/"
                url2 += _id
                x = requests.delete(url2)
                print("Saliendo response:" + str(x))
        
    except KeyboardInterrupt:
        link.close()