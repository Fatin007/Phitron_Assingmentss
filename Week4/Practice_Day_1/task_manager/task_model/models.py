from django.db import models

# Create your models here.
class Task(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_completed = models.BooleanField(default=False)
    category = models.ManyToManyField('categories.Category', related_name='tasks', blank=True)

    def __str__(self):
        return self.title