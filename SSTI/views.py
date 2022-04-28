from django.shortcuts import render

# Create your views here.
from django.views import View


class IndexView(View):
    template_name = 'index.html'

    def get(self, *args, **kwargs):
        return render(self.request, template_name=self.template_name)

