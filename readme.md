- создать env файл 
- composer install, npm run prod 
- php artisan migrate
- php artisan db:seed (seed настроен на 100000 юзеров и 10000 постов, это не из-за того, что я не могу чанкать, а в связи с тем, что сам сид очень долго выполняется)
- php artisan serve (на 8000)

#p.s.

Я знаю, что мог упростить фронт, переиспользуя часть кода, однако отошел от этого, т.к. планировал показать этим, что при расширении приложения, пришлось бы много переделывать. Ну также я мог сделать его лучше, по прогрузке и инфинит скроллинге, но забил, как вы понимаете - лень
