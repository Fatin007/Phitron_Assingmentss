from django import forms
from .models import Category

class CategoryForm(forms.ModelForm):
    class Meta:
        model = Category
        fields = ['name']
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Enter category name'}),
        }
        labels = {
            'name': 'Category Name',
        }
        error_messages = {
            'name': {
                'required': 'This field is required.',
                'max_length': 'This field cannot exceed 100 characters.',
            },
        }

        