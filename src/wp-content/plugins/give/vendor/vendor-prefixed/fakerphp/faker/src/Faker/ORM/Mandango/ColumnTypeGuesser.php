<?php
/**
 * @license MIT
 *
 * Modified by impress-org on 22-October-2024 using Strauss.
 * @see https://github.com/BrianHenryIE/strauss
 */

namespace Give\Vendors\Faker\ORM\Mandango;

use Give\Vendors\Faker\Generator;

class ColumnTypeGuesser
{
    /**
     * @var Generator
     */
    protected $generator;

    public function __construct(Generator $generator)
    {
        $this->generator = $generator;
    }

    /**
     * @return \Closure|null
     */
    public function guessFormat($field)
    {
        $generator = $this->generator;

        switch ($field['type']) {
            case 'boolean':
                return static function () use ($generator) {
                    return $generator->boolean;
                };

            case 'integer':
                return static function () use ($generator) {
                    return $generator->numberBetween(0, 4294967295);
                };

            case 'float':
                return static function () use ($generator) {
                    return $generator->randomFloat();
                };

            case 'string':
                return static function () use ($generator) {
                    return $generator->text(255);
                };

            case 'date':
                return static function () use ($generator) {
                    return $generator->dateTime;
                };

            default:
                // no smart way to guess what the user expects here
                return null;
        }
    }
}
