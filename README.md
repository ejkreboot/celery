# celery

Exceedingly basic logger for node. Has three quasi-useful features:

1. Variable number of arguments, all of which will be stringified.
2. Prints file and line number from which logger was called.
3. Silent unless you set the environment variable CELERY_DEBUG to some truthy value.


## Usage

```
import { Log } from "celery";
process.env.CELERY_DEBUG = 1;
Log("A very useful logging message.")
process.env.CELERY_DEBUG = "";
Log("This message will not be emitted.")
```

## What's in a name?

While I was thinking about a crisp, fresh name for this package, I thought of the popular "ants on a log" snack comprised of raisins on peanut butter on celery. Thus, I decided to call the package `celery`. 
