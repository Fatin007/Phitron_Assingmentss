from django import forms
from .models import Task

class TaskForm(forms.ModelForm):
    class Meta:
        model = Task
        exclude = ['created_at']
        widgets = {
            'title': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Enter task title'}),
            'description': forms.Textarea(attrs={'class': 'form-control', 'placeholder': 'Enter task description'}),
            'is_completed': forms.CheckboxInput(attrs={'class': 'form-check-input'}),
            'category': forms.SelectMultiple(attrs={'class': 'form-select'}),
        }

        labels = {
            'title': 'Task Title',
            'description': 'Task Description',
            'is_completed': 'Is Completed',
            'category': 'Category',
        }
        error_messages = {
            'title': {
                'required': 'This field is required.',
                'max_length': 'This field cannot exceed 200 characters.',
            },
            'description': {
                'required': 'This field is required.',
            },
        }

        