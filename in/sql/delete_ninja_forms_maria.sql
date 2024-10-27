delete from wp_postmeta where post_id in (
	SELECT distinct post_id
    FROM `wp_postmeta`
    WHERE
    meta_key = '_form_id' AND
    meta_value in (SELECT distinct ID from wp_nf3_forms)
)
