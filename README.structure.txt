app

 -shared
     -services
     -pipes
     -components
     -models

-modules
  -users
    -components
        -list
        -edit
    -models
        -users.model.ts
    -services
        -user-service.ts

    users.component.ts // this component should act like a container/smart component
    users.component.html
    users.module.ts
    users.route.ts

  -organisations
    -components
        -list
        -manage
    -models
        organisation.model.ts
    -services
        organisation.service.ts

    organisations.component.ts  // this component should act like a container/smart component
    organisations.component.html
    organisations.module.ts
    organisations.route.ts

-app.component.ts
-app.component.html
-app.module.ts
-app-routing.module.ts
