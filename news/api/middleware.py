# from django.utils import timezone
# from django.contrib.auth import logout
# from .models import Token

# class TokenExpirationMiddleware:
#     def __init__(self, get_response):
#         self.get_response = get_response

#     def __call__(self, request):
#         if request.user.is_authenticated:
#             token = request.auth
#             if token:
#                 expiration_time = token.created + token.timeout
#                 if expiration_time <= timezone.now():
#                     logout(request)
#         response = self.get_response(request)
#         return response
