<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    @vite('resources/css/app.css')
    <title>Reset Password</title>
</head>

<body>
    <div class="container my-10">
        <h1 class="text-2xl text-center mb-3">Reset Password</h1>
        <p>Click the link below to reset your password:</p>
        <a href="{{ route('password.reset', ['token' => $token]) }}"
            class="text-blue-500 hover:underline">{{ route('password.reset', ['token' => $token]) }}</a>
    </div>
</body>

</html>
