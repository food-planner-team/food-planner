<?php

namespace App\Http\Controllers\v1;

use App\Exceptions\SystemError;
use CodingPhase\Fractalfy\Controllers\FractalfyController;
use CodingPhase\Fractalfy\Fractalfy;
use Illuminate\Http\Request;

class ApiController extends FractalfyController
{
    /**
     * @var string
     */
    protected $model;

    /**
     * @param \CodingPhase\Fractalfy\Fractalfy $fractal
     * @param \Illuminate\Http\Request $request
     */
    public function __construct(?Fractalfy $fractal = null, ?Request $request = null)
    {
        if (is_null($request)) {
            $request = request();
        }

        if (is_null($fractal)) {
            $fractal = Fractalfy::create();
        }

        parent::__construct($fractal, $request);

        if($this->model) {
            $this->authorizeResource($this->model);
        }

        if (method_exists($this, 'boot')) {
            app()->call([$this, 'boot']);
        }
    }

    /**
     * Get the map of resource methods to ability names.
     *
     * @return array
     */
    protected function resourceAbilityMap()
    {
        $map = [
            'index' => 'index',
        ];

        return array_merge($map, parent::resourceAbilityMap());
    }

    /**
     * @param int|null $statusCode
     * @param string $modelName
     * @param mixed $code
     * @param null $additionalData
     * @return mixed
     * @throws \Exception
     */
    public function respondWithSystemError(?int $statusCode = null, $modelName = '', $code, $additionalData = null, $headers = [])
    {
        if($statusCode != null) {
            $this->setResponseStatusCode($statusCode);
        }

        $error = new SystemError( '' , $statusCode, null, $modelName, $code);

        return $this->respond([
            'error' => [
                'message'     => $error->getErrorMessage(),
                'error_code'  => $error->getCode(),
                'status_code' => $this->getResponseStatusCode(),
                'data' => $additionalData
            ],
        ], $headers);
    }
}
