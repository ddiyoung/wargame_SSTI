import json

from django.http import HttpResponse
from django.shortcuts import render


# Create your views here.
def index(request):
    template_name = 'index.html'

    return render(request, template_name)


def Newsletter(request):
    email = request.POST['username']
    user = request.user
    template = "%s" % email
    template = template.format(email=email, user=user)
    template = "{'email' :'" + template + "'}"
    return HttpResponse(json.dumps(template), content_type="application/json")
