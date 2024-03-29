<?php

namespace App\Helpers;

use Illuminate\Support\Facades\Artisan;

class CustomHelper
{
    /**
     * @param array $data
     */
    public static function changeEnv($data = [])
    {
        if (count($data) > 0) {
            $path = app()->environmentFilePath();
            $env = file_get_contents($path);
            $env = preg_split('/(\r\n|\r|\n)/', $env);

            foreach ((array) $data as $key => $value) {
                if (preg_match('/\s/', $value) || strpos($value, '#') !== false) {
                    $value = '"' . $value . '"';
                }
                foreach ($env as $env_key => $env_value) {
                    $entry = explode("=", $env_value, 2);
                    if ($entry[0] == $key) {
                        $env[$env_key] = $key . "=" . $value;
                    } else {
                        $env[$env_key] = $env_value;
                    }
                }
            }
            $env = implode("\n", $env);
            file_put_contents($path, $env);

            Artisan::call('config:clear');
            Artisan::call('config:cache');
        }
    }

    /**
     * @param $file
     */
    public static function getFileExtension($file)
    {
        return explode('/', substr($file, 0, strpos($file, ';')))[1];
    }

    /**
     * @param $file
     * @param $prefix
     */
    public static function getFileNameExtension($file, $prefix = '')
    {
        $ext = explode('/', substr($file, 0, strpos($file, ';')))[1];
        if ($prefix != '') {
            return $prefix . '_' . time() . '.' . $ext;
        }

        return time() . '.' . $ext;
    }
}
