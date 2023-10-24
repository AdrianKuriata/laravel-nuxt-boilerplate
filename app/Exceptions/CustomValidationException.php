<?php

namespace App\Exceptions;

use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpFoundation\Response;

class CustomValidationException extends ValidationException
{
    public function render($request): JsonResponse
    {
        return new JsonResponse([
            'errors' => $this->mapErrors($this->validator->errors()->getMessages()),
        ], Response::HTTP_UNPROCESSABLE_ENTITY);
    }

    protected function mapErrors(array $errors): array
    {
        $preparedErrors = [];
        foreach ($errors as $path => $message) {
            $preparedErrors[] = [
                'path' => $path,
                'message' => $message[0]
            ];
        }

        return $preparedErrors;
    }
}
