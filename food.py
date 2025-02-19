# Code for the Online Food Ordering System

# Import necessary libraries
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

# Initialize Flask app and database
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///food_ordering.db'
db = SQLAlchemy(app)

# Define User model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)

# Define Restaurant model
class Restaurant(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    location = db.Column(db.String(100), nullable=False)

# Define MenuItem model
class MenuItem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    price = db.Column(db.Float, nullable=False)
    restaurant_id = db.Column(db.Integer, db.ForeignKey('restaurant.id'), nullable=False)

# Define Order model
class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    menu_item_id = db.Column(db.Integer, db.ForeignKey('menu_item.id'), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)

# Route to create a new user
@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    new_user = User(username=data['username'], password=data['password'])
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'User  registered successfully'}), 201

# Route to create a new restaurant
@app.route('/restaurants', methods=['POST'])
def add_restaurant():
    data = request.get_json()
    new_restaurant = Restaurant(name=data['name'], location=data['location'])
    db.session.add(new_restaurant)
    db.session.commit()
    return jsonify({'message': 'Restaurant added successfully'}), 201

# Route to create a new menu item
@app.route('/menu_items', methods=['POST'])
def add_menu_item():
    data = request.get_json()
    new_menu_item = MenuItem(name=data['name'], price=data['price'], restaurant_id=data['restaurant_id'])
    db.session.add(new_menu_item)
    db.session.commit()
    return jsonify({'message': 'Menu item added successfully'}), 201

# Route to place an order
@app.route('/orders', methods=['POST'])
def place_order():
    data = request.get_json()
    new_order = Order(user_id=data['user_id'], menu_item_id=data['menu_item_id'], quantity=data['quantity'])
    db.session.add(new_order)
    db.session.commit()
    return jsonify({'message': 'Order placed successfully'}), 201

# Run the app
if __name__ == '__main__':
    db.create_all()  # Create database tables
    app.run(debug=True)