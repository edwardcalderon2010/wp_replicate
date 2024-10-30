<?php

namespace Give\Framework\Support\Facades\Scripts;

/**
 * This is a facade for interacting with a "script asset file" generated by "@wordpress/scripts" and  "@wordpress/dependency-extraction-webpack-plugin".
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-dependency-extraction-webpack-plugin/#wordpress
 *
 * @since 2.32.0
 */
class ScriptAssetFacade
{
     /**
     * @since 2.32.0
     */
    public function getDependencies(string $path): array
    {
        $assets = $this->get($path);

        return $assets['dependencies'];
    }

     /**
     * @since 2.32.0
      *
      * @return int|string
     */
    public function getVersion(string $path)
    {
        $assets = $this->get($path);

        return $assets['version'];
    }

    /**
     * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-dependency-extraction-webpack-plugin/#wordpress
     *
     * @return array{dependencies: array<string>, version: int|string}
     *
     * @since 2.32.0
     */
    public function get(string $path): array
    {
        return file_exists($path) ? require $path : ['dependencies' => [], 'version' => filemtime($path)];
    }
}