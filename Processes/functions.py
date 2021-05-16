import os
import base64

def imgBase64URL(local_path, img_url):
    
    if not img_url:
        return img_url

    try:
        with open(local_path, "rb") as image_data:
            converted_string = base64.b64encode(image_data.read())
            print(converted_string)
        """
        image_format = os.path.splitext(img_url)[-1].replace('.', '').lower()
        encoded_string = base64.b64encode(image_data).decode('utf-8')

        if image_format in ['jpg', 'jpeg', 'png', 'gif']:
            return 'data:image/%s;base64,%s' % (image_format, encoded_string)
        """

    except Exception as error:
        print(error)
        pass

    return img_url

print(imgBase64URL("../static/Images/1/AG/avengersWall.jpg", "http://localhost:8000/static/Images/1/AG/avengersWall.jpg"))