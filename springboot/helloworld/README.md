
# Rerence App for spring boot

## Build and Deploy

### For openjdk 17

```
oc new-app openjdk:17-ubi9~https://github.com/shgovind-rh/refapps.git --context-dir springboot/helloworld --name sb-openjdk17-hw
```
or
```
oc process -f ./template.yml --param-file=template-openjdk17.param | oc apply -f -
oc start-build sb-openjdk17-hw -F
```
