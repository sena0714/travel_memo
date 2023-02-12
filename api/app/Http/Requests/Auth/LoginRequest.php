<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'email' => ['required', 'email:rfc'],
            'password' => ['required', 'regex:/\A([a-zA-Z0-9]{8,})+\z/u']
        ];
    }

    public function messages()
    {
        return [
            'required' => '入力必須です。',
            'email.email' => '有効なメールアドレスを入力してください。',
            'password.regex' => '8文字以上の半角英数字で入力してください。'
        ];
    }
}
