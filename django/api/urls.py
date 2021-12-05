from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('api/', views.StudentList.as_view()),
    path('add/', views.add, name='add'),


]