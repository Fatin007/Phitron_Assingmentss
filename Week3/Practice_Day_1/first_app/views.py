from django.shortcuts import render
import datetime

def about(request):
    d={'name': 'Fatin', 
       'age': 23, 
       'days': ['Monday', 'Tuesday', 'Wednesday'],
       'date': datetime.datetime.now(),
       'num': 100,
       'lst': [1,2,3],
       }
    return render(request, 'first_app/about.html',d)

def contact(request):
    d={
        'list_ppl':[
            {'name':'Fatin', 'age':23},
            {'name':'Abdul', 'age':35},
            {'name':'Ali', 'age':15},
            {'name':'Ahmed', 'age':45},
        ],
        'fruits': ['apple', 'banana', 'cherry', 'date'],
        'time': datetime.datetime.now(),
    }
    return render(request, 'first_app/contact.html',d)

def services(request):
    d={
        'publish_time': datetime.datetime(2025, 3, 21, 14, 30, 0),
        'baikka_likha': 'বাইক্কা লিখা',
        'num': 1,
    }
    return render(request, 'first_app/services.html',d)