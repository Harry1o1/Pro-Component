from django.contrib import admin
from .models import Students, Video

# Register your models here.
@admin.register(Students)
@admin.register(Video)
    
    
class VideoAdmin(admin.ModelAdmin): 
    list_display = ['id', 'name','video']
    
    
    
