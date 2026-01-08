from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from .models import Company
from .serializers import CompanySerializer

class ApiRoutesView(APIView):
    def get(self, request):
        routes = [
            '/api/companies/',
            '/api/companies/<id>/',
        ]
        return Response(routes)

class CompanyListView(generics.ListAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class CompanyDetailView(generics.RetrieveAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
