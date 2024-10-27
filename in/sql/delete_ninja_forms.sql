WITH TGT_FORM_IDS AS
(
    SELECT distinct post_id
    FROM `wp_postmeta`
    WHERE
    meta_key = '_form_id' AND
    meta_value in (SELECT distinct ID from wp_nf3_forms)
)
/* 23 OCT: Before 49,992 */
/*select * from wp_postmeta where post_id in (select post_id from TGT_FORM_IDS);*/
/* 23 OCT: After 35,836 */
select * from wp_postmeta where post_id = 9061;
