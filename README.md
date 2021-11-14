## SoccerSite
Full Stack application created to view soccer statistics in the English Premier League. 

Created using Angular JS for the Frontend and Spring Boot for the Backend.

Backend service communicates with PostgreSQL database - AWS Relational Database Service (RDS)

## Deployment 
Containerized both frontend and backend microservices (Docker) and deployed them the Amazon Elastic Kubernetes Services (EKS)

Deployed the microservices to a managed node group within a Kubernetes cluster with autoscaling and load balancing configured

Microservices can communicate with the PostgreSQL database which was deployed to AWS RDS. 



## Deployment Strategy
![Application](./microservice_architecture.drawio.png)

<br />


## App preview

![Application](/frontend/angular-soccersite/src/assets/soccerapp.png)
