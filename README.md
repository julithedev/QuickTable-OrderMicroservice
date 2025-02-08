# Order Service

The Order Service is a microservice responsible for managing customer orders. It handles order creation, updates, and retrieval, ensuring seamless integration with the inventory service. This service is built using Node.js with the Express.js framework for flexibility and scalability.

## Key Features

### Order Management:
- Create, update, and retrieve orders.
- Notify the inventory service when an order is placed.
- Validate stock availability before confirming an order.

## Tech Stack

- **Language**: Node.js
- **Framework**: Express.js (Minimalist web framework)
- **Database**: MongoDB (NoSQL database for order storage)
- **Service Communication**: gRPC for interaction with the inventory service
- **Logging**: Winston for structured logs

## Endpoints

### REST API

- **POST /orders** – Create a new order.
- **GET /orders/:id** – Retrieve order details.
- **PUT /orders/:id** – Update the status of an order.

![image](https://github.com/user-attachments/assets/44825ac5-20a9-45b5-b3d0-a40424dffd0c)
