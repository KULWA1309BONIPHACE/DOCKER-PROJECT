# DOCKER-PROJECT 🐳🚀

A RESTful API built with **Node.js**, **Express**, and **PostgreSQL**, fully containerized using **Docker** and deployed on an **AWS EC2** instance as part of a final year project at the **University of Dodoma**.

---

## 🔧 Features

- `GET /students` → Returns list of student names and programs
- `GET /subjects` → Returns list of subjects and their academic year

---

## 🛠️ Tech Stack

- Node.js + Express.js
- PostgreSQL
- Docker & Docker Compose
- AWS EC2 (Ubuntu)
- Git & GitHub

---

## 📦 Docker Containerization

This project is fully containerized using **Docker**. The Dockerfile sets up the Node.js environment and prepares the API for production.

### 🔧 Build Docker Image

```bash
docker build -t ec2-docker-project-api .
```

### ▶️ Run Container Locally

```bash
docker run -p 5000:5000 ec2-docker-project-api
```

Test endpoints locally:

- `http://localhost:5000/students`
- `http://localhost:5000/subjects`

---

## 🧩 Docker Compose Setup

We use **Docker Compose** to manage multiple services (Node.js API + PostgreSQL).

### 📄 docker-compose.yml

Defines:

- `api` container
- `postgres` container
- Networking, volumes, env variables

### ▶️ Run with Compose

```bash
docker-compose up --build
```

Stop containers:

```bash
docker-compose down
```

---

## ☁️ Docker Deployment on AWS EC2

To deploy:

1. Launch an Ubuntu EC2 instance
2. Install Docker and Docker Compose
3. Clone this repository
4. Run:

```bash
docker-compose up -d
```

Access API from browser:

```http
http://13.60.210.54:5000/students
http://13.60.210.54:5000/subjects
```

✅ Logs will show:

```
✅ Server is running on http://localhost:5000
```

---

## 🐘 PostgreSQL Setup

Login to PostgreSQL container:

```bash
docker exec -it ec2-docker-project-postgres-1 psql -U postgres
```

## 📷 Screenshots & Logs

- `docker_ps.png` → Screenshot showing active containers from `docker ps`
- `docker_logs.txt` → Log output captured via:

```bash
docker logs ec2-docker-project-api-1 > docker_logs.txt
```

## 🧯 Troubleshooting

- If containers fail, check logs:

```bash
docker logs container_id
```

- Ensure PostgreSQL container is healthy
- Ensure port `5001` is open in your EC2 security group

---

## 👨‍🎓 Project Info

**Author:** KULWA BONIPHACE 
**University:** University of Dodoma  
**Course:** CS421 – Application Deployment and Management  
**Assignment:** API Deployment Using Docker and EC2
