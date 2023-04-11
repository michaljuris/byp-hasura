alter table "public"."pizza" add column "created_at" timestamptz
 null default now();
