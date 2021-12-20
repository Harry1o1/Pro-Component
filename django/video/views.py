from django.shortcuts import render
from django.http import HttpResponse
from .serializers import StudentSerializer, VideoSerializer
from .models import Students, Video
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveAPIView, UpdateAPIView, DestroyAPIView, ListCreateAPIView, RetrieveUpdateAPIView, RetrieveDestroyAPIView, RetrieveUpdateDestroyAPIView 


# ListAPIView
class StudentList(ListAPIView):
    queryset = Students.objects.all()
    serializer_class = StudentSerializer
    # filterset_fields = ['name','id']

class StudentCreate(CreateAPIView):
    queryset = Students.objects.all()
    serializer_class = StudentSerializer
    
    
    
    
    
class VideoList(ListAPIView):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer
    # filterset_fields = ['name','id']

class VideoCreate(CreateAPIView):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer
