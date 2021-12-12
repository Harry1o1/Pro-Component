from django.shortcuts import render
from django.http import HttpResponse
from .serializers import StudentSerializer
from .models import Students
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveAPIView, UpdateAPIView, DestroyAPIView, ListCreateAPIView, RetrieveUpdateAPIView, RetrieveDestroyAPIView, RetrieveUpdateDestroyAPIView 


# ListAPIView
class StudentList(ListAPIView):
    queryset = Students.objects.all()
    serializer_class = StudentSerializer
    # filterset_fields = ['name','id']

