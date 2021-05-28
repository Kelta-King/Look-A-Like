from __future__ import print_function, unicode_literals
from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import base64
from django.core.files.storage import default_storage
import os
from Graphics.snippets import paths as path
from Resources import characterLists as cl
from facepplib import FacePP, exceptions
from Processes import comparision as cp
import json
from Look_A_Like import secreats as sc

def uploadImagePage(request):
    return render(request, "avengersFileUpload.html")

@csrf_exempt
def imageUpload(request):

    if request.method == "POST":
        
        # Get files
        image = request.FILES['image']

        # Save file
        file_name = default_storage.save("Users\\DPS\\" + image.name, image)
        
        # Openning file process
        filey = default_storage.open(file_name)
        current_path = os.path.dirname(__file__)
        relative_path = path.uploadedImage() + str(image.name)
        abs_path = os.path.join(current_path, relative_path)
        
        # Opening image from the absolute path
        image_data = open(abs_path, "rb")
        
        # Converting image to base64 string
        converted_string = "data:image/jpeg;base64, " + str(base64.b64encode(image_data.read()).decode('utf-8'))
        
        # Absolute path for checking image
        relative_path = path.avgImgCheckPath()
        absolute_path_check = os.path.join(current_path, relative_path)

        vals = list()
        characters = cl.checkListAvengers(absolute_path_check)
        for character in characters:
            # Absolute path for showing image
            relative_path = path.avgImgShowPath() + str(character[1])
            absolute_path_show = os.path.join(current_path, relative_path)
            
            new_image = open(absolute_path_show, "rb")

            app_ = FacePP(api_key = sc.getAPIKey(), api_secret = sc.getAPISecret())
            image1 = "https://media.geeksforgeeks.org/wp-content/uploads/20200216230843/img45.jpg"
            image2 = 'https://media.geeksforgeeks.org/wp-content/uploads/20200216224036/img210.jpg'
            vals.append(cp.face_comparing(app_, image1, image2))
        vals = json.dumps(vals)
        return HttpResponse(str(vals))
    else:
        print("Smething went wrong")
        return HttpResponse("Something went wrong")

#         app_ = FacePP(api_key = api_key, 
#                       api_secret = api_secret)
#         funcs = [
#             face_detection,
#             face_comparing_localphoto,
#             face_comparing_websitephoto,
#             faceset_initialize,
#             face_search,
#             face_landmarks,
#             dense_facial_landmarks,
#             face_attributes,
#             beauty_score_and_emotion_recognition
#         ]
          
#         # Pair 1
#         image1 = 'Image 1 link'
#         image2 = 'Image 2 link'
#         face_comparing(app_, image1, image2)