from flask import Flask, render_template, request
app=Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/inicio")
def index():
    return render_template('index.html')

@app.route('/map')
def map():
    markers=[
        {
        'lat':0,
        'lon':0,
        'popup':'This is the middle of the map.'
        }
    ]
    return render_template('map.html',markers=markers )

# Localhost:5000/user/Jhon
@app.route('/user/<name>')
def user(name):
    return render_template('user.html',user_name=name)

##Create Custom Error Pages
#invalid URL
@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

#Internal Server Error
@app.errorhandler(500)
def page_not_found(e):
    return render_template('500.html'), 500    
# if __name__ == '__main__':
#     app.run(host="localhost", port=8080, debug=True)