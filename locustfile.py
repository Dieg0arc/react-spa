from locust import HttpUser, task, between

class FrontendUser(HttpUser):
    wait_time = between(1, 2)

    @task
    def cargar_home(self):
        self.client.get("/")
