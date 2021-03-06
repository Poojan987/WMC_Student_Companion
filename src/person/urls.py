from django.urls import path, include
from .views import CreateUserAPIView, RatingPost, completedCourse, completedCourseUpdate, creditDetail,studentList,particular_student,getUserDetailFromAuth,showStudent
from .views import programmeListCreateClass,ToDoCreateList,ToDoRetUpdDest
from django.conf.urls.static import static
from django.conf import settings
# from django.views.decorators.csrf import ensure_csrf_cookie
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('auth/', (include('rest_framework.urls', namespace='rest_framework'))),
    # path('token',obtain_auth_token),
    path('token',getUserDetailFromAuth.as_view()),
    path('register/',CreateUserAPIView.as_view()),
    path('students/',studentList.as_view()),
    # path('students/',studentList.as_view({'get': 'list'})),
    # path('student/<int:pk>/',particular_student.as_view()),
    path('student/<int:pk>/',showStudent.as_view()),
    path('student/profile/',particular_student.as_view()),
    path('program/',programmeListCreateClass.as_view()),

    path('todo/',ToDoCreateList.as_view()),
    path('todo/<int:pk>/',ToDoRetUpdDest.as_view()),
    
    path('completedcourse/',completedCourse.as_view()),
    path('completedcourse/<int:pk>/',completedCourseUpdate.as_view()),

    path('credit/',creditDetail.as_view()),
    path('credit/<int:pk>/',RatingPost.as_view()),
    
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)