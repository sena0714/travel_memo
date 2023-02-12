<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class UserRegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => ['required', 'max:50'],
            'email' => ['required', 'unique:users,email', 'email:rfc', 'max:50'],
            'password' => ['required', 'regex:/\A([a-zA-Z0-9]{8,})+\z/u', 'max:255', 'confirmed']
        ];
    }

    public function messages()
    {
        return [
            'required' => '入力必須です。',
            'name.max' => '入力文字数が上限に達しています(上限50文字)。',
            'email.unique' => '既に登録されているメールアドレスです。',
            'email.email' => '有効なメールアドレスを入力してください。',
            'email.max' => '入力文字数が上限に達しています(上限50文字)。',
            'password.regex' => '8文字以上の半角英数字で入力してください。',
            'confirmed' => 'パスワードが一致しません。',
            'password.max' => '入力文字数が上限に達しています(上限255文字)。',
        ];
    }
}
