<?php

namespace App\Http\Controllers\Auth;

use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Mail\ResetPasswordMail;
use App\Models\PasswordResetToken;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class ForgotPasswordController extends Controller {
    public function showLinkRequestForm() {
        return Inertia::render('Auth/ForgotPassword');
    }

    public function sendResetLinkEmail(Request $request) {
        $request->validate(['email' => 'required|email|exists:users,email']);

        $token = Str::random(60);

        PasswordResetToken::updateOrCreate(
            ['email' => $request->email],
            [
                'token' => $token,
                'created_at' => now()
            ]
        );

        Mail::to($request->email)->send(new ResetPasswordMail($token));

        return redirect()->back()->with('message', 'We have e-mailed your password reset link!');
    }

    public function showResetForm(Request $request) {
        $token = $request->route('token');
        $user = PasswordResetToken::where('token', $token)->first();

        return Inertia::render('Auth/ResetPassword', [
            'token' => $token,
            'email' => $user->email
        ]);
    }

    public function reset(Request $request) {
        $request->validate([
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:8',
            'password_confirmation' => 'required|min:8|same:password'
        ]);

        $passwordReset = PasswordResetToken::where('email', $request->email)
            ->where('token', $request->token)
            ->first();

        if (!$passwordReset) {
            return redirect()->back()->withErrors(['email' => 'The provided token is invalid or expired.']);
        }

        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return redirect()->back()->withErrors(['email' => 'We could not find a user with that email address.']);
        }

        $user->password = Hash::make($request->password);
        $user->save();

        PasswordResetToken::where('email', $request->email)->delete();

        return redirect()->route('login')->with('message', 'Your password has been reset!');
    }
}
