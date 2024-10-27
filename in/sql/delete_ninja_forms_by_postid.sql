use empower_autism_staging;
WITH TGT_FORM_IDS AS
(
  select post_id from wp_postmeta where meta_key like '_field_%'
)
delete from wp_postmeta where post_id in (select post_id from TGT_FORM_IDS);
