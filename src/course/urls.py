from django.urls import path, include
from .views import CourseList,FacultyList,BuildingList,CategoryList,CourseRUD,FacultyRetieve
from django.conf.urls.static import static
from django.conf import settings
# from django.views.decorators.csrf import ensure_csrf_cookie
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
   
    path('course_list/',CourseList.as_view()),
    path('course_list/<int:pk>/',CourseRUD.as_view()),
   
    path('building_list/',BuildingList.as_view()),
    path('faculty_list/',FacultyList.as_view()),
    path('faculty_list/<int:pk>',FacultyRetieve.as_view()),
    path('category_list/',CategoryList.as_view()),
    
    
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)