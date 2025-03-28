from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('home.urls')),
    path('tasks/', include('task_model.urls')),
    path('categories/', include('categories.urls')),
]
