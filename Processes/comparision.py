from facepplib import FacePP, exceptions

def face_comparing(app, img1, img2):
    cmp_ = app.compare.get(image_url1 = img1, image_url2 = img2)