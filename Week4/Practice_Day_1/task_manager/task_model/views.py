from django.shortcuts import render, redirect
from . import forms
from .models import Task

# Create your views here.
def add_task(request):
    if request.method == 'POST':
        form = forms.TaskForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('home')
    else:
        form = forms.TaskForm()
    return render(request, 'add_task.html', {'form': form, 'mode': 'add'})

def edit_task(request, id):
    task = Task.objects.get(id=id)
    if request.method == 'POST':
        form = forms.TaskForm(request.POST, instance=task)
        if form.is_valid():
            form.save()
            return redirect('home')
    else:
        form = forms.TaskForm(instance=task)
    return render(request, 'add_task.html', {'form': form, 'mode': 'edit'})

def delete_task(request, id):
    task = Task.objects.get(id=id)
    task.delete()
    return redirect('home')
