from django.db import models

# Create your models here.
class Students(models.Model): 
    name = models.CharField(max_length=100)
    stars = models.IntegerField()
    age = models.IntegerField()
    email = models.CharField(max_length=100)
    Comment = models.CharField(max_length=100)
    bff = models.CharField(max_length=100)
    # time = models.DateTimeField(auto_now_add=True)
    video=models.FileField(upload_to="video/%y")
    
    
    
    
class Video(models.Model): 
    name = models.CharField(max_length=100,blank=True,null=True)
    video=models.FileField(upload_to="video/%y", blank=True,null=True)
    
    
class Bleze(models.Model): 
    tittle = models.CharField(max_length=100,blank=True,null=True)
    url = models.CharField(max_length=300,blank=True,null=True)
    
# We will make a demo model    