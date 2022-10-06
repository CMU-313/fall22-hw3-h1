alter table T_DOCUMENT add column DOC_GPA_C varchar(500) NOT NULL;
alter table T_DOCUMENT add column DOC_GRE_C varchar(500) NOT NULL;
alter table T_DOCUMENT add column DOC_SCORE_C varchar(500) NOT NULL;
update T_CONFIG set CFG_VALUE_C = '28' where CFG_ID_C = 'DB_VERSION';