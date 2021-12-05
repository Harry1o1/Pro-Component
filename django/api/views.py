from django.shortcuts import render
from django.http import HttpResponse
from .serializers import StudentSerializer
from rest_framework.generics import ListAPIView
from .models import Students

def index(request):
    return HttpResponse("Hello world!")
    
    
    
# Create your views here.
class StudentList(ListAPIView):

    queryset = Students.objects.all()
    serializer_class = StudentSerializer
    
    
    
    
def add(request):
    """docstring for fname"""
    # TODO: write code...
    return render(request,"index.html")
    