/**
* Created by Chao.Han on 2021/01/04
*/

import GameUser from "./GameUser";
import {IUserProfile} from "../../../framework/network/GameMessage";

export enum Gender{
    Man = 1,
    Woman = 2,
}

export enum FriendRelation {
    None = 0,
    Following = 1, //关注
    Mutual = 2, //双向关注
    BeFollow = 3 //被关注
}

let FriendRelationString = [
    "null",
    "following", //关注
    "mutual", //双向关注
    "befollow" //被关注
];

export default class GameUserProfile {
    uid: string;
    headerUrl: string;
    name: string;
    gender: Gender;
    isDirty: boolean = false;
    friends: Map<string, FriendRelation> = new Map<string, FriendRelation>();

    isSelfUser(): boolean {
        return GameUser.getInstance().uid == this.uid;
    }

    updateUserProfile(userProfile: IUserProfile) {
        this.uid = userProfile.uid.toString();
        this.headerUrl = userProfile.headerUrl;
        this.gender = userProfile.gender;
        this.name = userProfile.name;
    }

    updateFriendRelation(uid: string, follow: FriendRelation) {
        this.friends.set(uid, follow);
    }

    updateFriendRelationWithCB(uid: string, follow: string) {
        for(let i = 0, length = FriendRelationString.length; i < length; i++) {
            let friendFollow = FriendRelationString[i];
            if (friendFollow == follow) {
                this.updateFriendRelation(uid, i);
                break;
            }
        }
    }

    getFriendRelation(uid: string): FriendRelation {
        let relation = this.friends.get(uid);
        if (!relation) {
            return FriendRelation.None;
        }
        return relation;
    }

}

export interface IDuiWanUserProfile {
    uid: number;
    nick: string; //昵称
    gender: Gender; //性别
    portrait?: string; //头像
    big_portrait?: string; //高清头像
    birthday?: string; //生日：2020-01-02
    sign?: string //个性签名
    family_id?: number; //家族ID
    identity?: number; //家族身份：3：族长 2：副族长 1：普通成员
}