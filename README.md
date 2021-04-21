# Cifrado César | Lista de Tareas Diarias

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Consideraciones técnicas](#3-consideraciones-técnicas)
* [4. Desarrollo del Proyecto](#4-desarrollo-del-proyecto)

***

## 1. Preámbulo

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio César lo usaba para enviar órdenes secretas a sus generales en los campos de
batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

* La letra A se cifra como D.
* La palabra CASA se cifra como FDVD.
* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con
mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la
comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas
más complejos de codificación, como el cifrado Vigenère, e incluso tiene
aplicación en el sistema ROT13.

***
## 2. Resumen del proyecto

En este proyecto crearás una aplicación web que servirá para que el usuario pueda cifrar y descifrar un texto indicando un desplazamiento específico de caracteres (_offset_).

La temática es libre. Tú debes pensar en qué situaciones de la vida real se
necesitaría cifrar un mensaje y pensar en cómo debe ser esa experiencia de uso
(qué pantallas, explicaciones, mensajes, colores, ¿marca?) etc.
***
## 3. Consideraciones técnicas

La lógica del proyecto debe estar implementada completamente en JavaScript. En este proyecto NO está permitido usar librerías o frameworks, solo JavaScript puro también conocido como Vanilla JavaScript.

No se debe utilizar la _pseudo-variable_ `this`.
***
## 4. Desarrollo del Proyecto

Como primera opción iba a optar por una mensajería secreta para parejas, pero el tema no me acomodó por lo que decidí cambiar todo y enfocarme en una To Do List semanal, y luego según el feedback de una Coach, lo cambié a solo un listado de tareas diarias, en dónde uno de los mensajes se iba a poder cifrar.

### **Definición del producto**

Esta página es para todas las personas que tienen dificultades planificándose con tareas diarias **(yo misma🤭)** y también quieren guardar una de esas tareas de forma cifrada, sin que nadie más comprenda que dice. Además de guardar el Nombre de la persona, se puede crear un listado de tareas diarias y cifrar 1 o más mensajes, escogiendo 1 número de desplazamiento del 1 al 34.



### **-Prototipo de alta Fidelidad en FIGMA-**
![Prototipo-Figma](https://i.imgur.com/WX4SD68.png)
![Prototipo-Figma](https://i.imgur.com/LThPVKE.png)

***
**Este proyecto solo está disponible para desktop, no es responsive(por el momento).**

### **-Screenshots de la página actualmente-**

![Prototipo-Figma](https://i.imgur.com/zIpN1Yk.png)
![Prototipo-Figma](https://i.imgur.com/Rg2LD8q.png)

## Cifrado Cesar | Lista de tareas diarias ---> [GitHub Pages](https://chillymedina.github.io/SCL015-cipher/src/index.html)